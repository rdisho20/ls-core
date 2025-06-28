'''Create a function called `process_order` with the following signature:
•   `order_id` (positional-only)
•   `customer_name` (can be positional or keyword)
•   `items` (variable positional arguments for item names)
•   `priority` (keyword-only, default "normal")
•   `discount` (keyword-only, default 0.0)
•   Additional keyword arguments for order metadata
The function should return a formatted order summary string.
Test Cases:'''

def process_order(order_id, /, customer_name, *items, priority="normal", discount=0.0, **metadata):
    return (f"order_id: {order_id}\n"
            f"customer_name: {customer_name}\n"
            f"items: {', '.join(item for item in items)}\n"
            f"priority: {priority}\n"
            f"discount: {discount}\n"
            f"metadata: {metadata}\n")


# Test various calling patterns:
order1 = process_order("ORD001", "John Smith", "laptop", "mouse", 
                      priority="high", discount=0.1, notes="Rush order")
print(order1)

order2 = process_order("ORD002", customer_name="Jane Doe", 
                      priority="normal", region="US")
print(order2)

# Should raise TypeError for positional-only violations:
process_order(order_id="ORD003", customer_name="Bob")  # TypeError