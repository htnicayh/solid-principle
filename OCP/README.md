# Open Closed Principle

## What is the Open Closed Principle?

The **Open Closed Principle (OCP)** states that a class should **be open for extensibility and closed for modification**.

What this means is that as soon as your class is in the wild and being used by other clients then you should not change its behaviour. However, it should be possible to extend the class so that it's possible to redefine its behaviour. Note, of course, that **bug fixes are allowed to be fixed** and therefore you are required to modify the class directly in this case!

Naturally, if you break this principle and modify a core class functionality that is already deployed into a production environment and is being used by 3rd party client applications or other parts of your system then this change can have a profound impact on the system and users of that system.

Note that this principle is based around examples of Inheritance and so therefore the examples will be based on Inheritance. However, **later on we will show how we prefer composition over inheritance** as a general rule.