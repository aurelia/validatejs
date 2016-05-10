can you add additional validation with the fluent API?
how could you validate nested objects (Customer > Address) - examples or how do you nest configs?
if no reporter is passed around you could just pull it from the object validated object using ValidationEngine or something
make sure the underlying properties are not enumerable

1. add notes to the blog post - initial release without complex binding / rendering
1. plan for release the following week with better bindingBehavior

possible to have a single binding behavior that pulls in the renderer from the container instead of explicitly having it used and having to share the logic around
  a. register a global renderer
  b. rename the binding behavior to validate
  c. get the reporter and the renderer from DI

infer the reporter from source.bindingContext and add a note to the blog post to explain that isn't needed long term but just for now.

Can use getContextFor(source, propName); to get the object.



let obj = { first: '' };

let validator = new Validator(obj);

validator(obj).ensure('first').required();

validator(obj).validate();

let two = class Person {
  @required firstName;
}

this.validator = new Validator(two).validate();
