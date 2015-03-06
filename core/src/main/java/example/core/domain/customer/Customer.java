package example.core.domain.customer;

import org.springframework.data.annotation.Id;

public class Customer {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private Address address;

    public Customer(){}

    public Customer(String firstName, String lastName, Address address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }

    @Override
    public String toString() {
        return String.format("Customer[id=%s, firstName='%s', lastName='%s']", id,
                firstName, lastName);
    }
}
