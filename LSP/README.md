# Liskov Substitution Principle

## What is the Liskov Substitution Principle?

The LSP can be defined as the following:

* Subtypes must be substitutable for their base types OR (another way....)
* Given any client, it should be able to apply any implementation of an interface without changing the correctness of the system

So what does the **correctness of the system** mean? Well for starters, it's not about changing the behaviour of the system because polymorphism is about changing the behaviour. Ultimately the correctness of the system is application specific but one high level idea is that any software system should not crash so if a client uses implementation A of an interface and the system does not crash, but then uses implementation B of an interface and the system DOES crash then you can say that you have changed the correctness of the system. That's a high level generic explanation as to the correctness of the system.

So you can think of the correctness of the system as the superset of all the correct behaviour. If you stay within that boundary then you have not changed the correctness of the system. Go outside and you have changed it (like if it causes the system to crash).