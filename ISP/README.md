# Interface Substitution Principle

## What is the Interface Substitution Principle?

The Interface Segregation Principle (ISP) states that Clients should not be forced to depend on methods they do not use.

So it's important, at this point, to understand **who owns the Interface**? It's _not_ defined by the concrete class that uses it, instead it is the **client that owns the interface**. Remember that interfaces are used to help introduce loose coupling. So it's not the concrete class that needs the interface - its the client that needs the interface.

So it's the client that owns the interface and the client defines what it needs. Therefore there is no need for the client to define a method on that interface if it does not need that method!

This should lead us to producing simple, focused interfaces and, futher, we should favour _Role Interfaces_ over _Header Interfaces_.