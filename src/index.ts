function myDecorator(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    console.log(target, propertyKey, descriptor);
}

class ExampleClass {
    @myDecorator
    method() {}
}

const obj = new ExampleClass();

obj.method();
