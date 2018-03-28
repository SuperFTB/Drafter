
package drafter.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import drafter.domain.User;
import drafter.repositories.UserRepository;

@Service
@Transactional
public class UserService {

	//Repository-------------------------------------------------------------------------------

	@Autowired
	private UserRepository	userRepository;


	//Constructor------------------------------------------------------------------------------

	public UserService() {
		super();
	}

	//CRUD Methods------------------------------------------------------------------------------

    public User create(User user) {
        return userRepository.save(user);
    }

    public User delete(int id) {
        User user = findById(id);
        if(user != null){
        	userRepository.delete(user);
        }
        return user;
    }

	public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    public User update(User user) {
        return null;
    }

	//Other business Methods-----------------------------------------------------------------------------


	/*public User findByPrincipal() {
		final UserAccount userAccount = LoginService.getPrincipal();
		final User user = this.userRepository.findByPrincipal(userAccount.getId());
		Assert.isTrue(user.getUserAccount().getUsername().equals(userAccount.getUsername()));
		return user;
	}*/

	/*public Boolean isUser() {
		Boolean result = false;
		try {
			final Authority aut = new Authority();
			aut.setAuthority(Authority.USER);

			result = LoginService.getPrincipal().getAuthorities().contains(aut);
		} catch (final Exception e) {
			result = false;
		}
		return result;
	}*/

	/*public void register(final User user) {
		Assert.notNull(user);
		UserAccount userAccount;
		final Md5PasswordEncoder encoder = new Md5PasswordEncoder();
		userAccount = user.getUserAccount();
		userAccount.setPassword(encoder.encodePassword(userAccount.getPassword(), null));
		user.setUserAccount(userAccount);

		this.save(user);

	}*/

}