package example.core;

import example.core.data.customer.Address;
import example.core.data.customer.Customer;
import example.core.data.customer.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.core.query.Update;

@SpringBootApplication
public class CoreApplication implements CommandLineRunner {

    @Autowired
    private CustomerRepository customerRepository;

    public static void main(String[] args) {
        SpringApplication.run(CoreApplication.class, args);
    }

    /**
     * Callback used to run the bean.
     *
     * @param args incoming main method arguments
     * @throws Exception on error
     */
    @Override
    public void run(String... args) throws Exception {
        //this.customerRepository.deleteAll();

        // save a couple of customers
        Address address = new Address();
        address.setZip("2119");
        this.customerRepository.save(new Customer("Tester", "Smith", new Address()));
        this.customerRepository.save(new Customer("Again", "Smith", new Address()));

        Customer test = this.customerRepository.findByFirstName("Alice");
        Update update =

        long count = this.customerRepository.count();
        System.out.println(count + " customers in the repo");
    }
}
