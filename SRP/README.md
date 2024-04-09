# Single Responsibility Principle

## What is the Single Responsibility Principle?

The **Single Responsibility Principle (SRP)** defines that a class should have a single responsibility. However, what is that responsibility supposed to be defined as?

A definition of responsibility is to have a reason to change. So, therefore, a class should only have one reason to change. This is fundamentally based on the need to separate the concerns. So if we have a need in our application for logging or caching or storing or whatever then these concerns need to be separated and written into separate classes each with their own SRP.

Another way of putting this would be to say **each class should do one thing and do it well**. The UNIX operating system is built on this principle and has thrived on it. UNIX has a number of CLIs / command line applications that do one thing very well, like `grep` or `sed` and these can be composed into applications or scripts or combined using pipes (|) very easily to make larger, more complex systems.