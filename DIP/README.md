# Dependency Inversion Principle

## What is the Dependency Inversion Principle?

This states that high level modules should not depend on low level modules. Both should depend on abstractions.

Moreover, abstractions should not depend on details. The details should depend on abstractions.

So in a way this is closely related to the Interface Segregation Principle in that clients own the interface. So a client can talk to an abstraction because it owns the interface and whatever is on the other side of that abstraction is an implementation detail.