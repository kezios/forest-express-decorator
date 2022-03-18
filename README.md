# Forest Express Decorator
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
🚀  Decorators for Express Forest Admin

## Installation

```bash
yarn add forest-express-decorator
```

## Usage (🚧 WIP!)

#### Collection :
```js
@Collection('customers')
@Model('customer')
class CustomerCollection extends Collection {
    @SmartField({
        type: 'String',
        get: (customer)=>`${customer.firstname} ${customer.lastname}`
        set: (customer, fullname)=>{
            fullname.split(' ');
            customer.firstname = names[0];
            customer.lastname = names[1];

            // Don't forget to return the customer.
            return customer;
        }
    })
    fullname;

    @SmartAction(GenerateInvoice)
    generateInvoice
}
```

#### Smart action :
```js
class GenerateInvoice extends SmartAction {
    @SmartActionField({
        type: 'Number',
        label: 'Price',
        description: 'The price to generate invoice in $'
        isRequired: true,
    })
    price;

    @EndPoint()
    @Post({url: ''})
    onRequest = (req, res) => {
        const price = req.body.data.attributes.values.price;
        // ..... 
        return res.status(200).send({success: 'Invoice generated !'})
    }
}
```

## Related

[Forest Admin Express](https://github.com/ForestAdmin/forest-express)

## License

[MIT](https://choosealicense.com/licenses/mit/)
