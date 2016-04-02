1. Need to get validator specs in place
  a. should validate and find the right config and validate against it
    1. with property
    2. without property
  b. getProperties should return all properties that are being watched
  c. ensure should allow adding new rules
    1. fluent API
    2. uses same rules

1. Figure out how to call validation immediately on the object
  a. The validator exposes the validate property
  b. ensure needs to set the validation config up also
