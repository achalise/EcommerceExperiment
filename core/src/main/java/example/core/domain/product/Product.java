package example.core.domain.product;

import org.springframework.data.annotation.Id;

public class Product {
    @Id
    private String id;
    private String sku;
    private String type;
    private String title;
    private String description;

    private long quantity;

    private Shipping shipping;
    private Pricing pricing;
    private ProductDetails productDetails;

    public Product(){}

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    public Shipping getShipping() {
        return shipping;
    }

    public void setShipping(Shipping shipping) {
        this.shipping = shipping;
    }

    public Pricing getPricing() {
        return pricing;
    }

    public void setPricing(Pricing pricing) {
        this.pricing = pricing;
    }

    public ProductDetails getProductDetails() {
        return productDetails;
    }

    public Product setProductDetails(ProductDetails productDetails) {
        this.productDetails = productDetails;
        return this;
    }



    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
