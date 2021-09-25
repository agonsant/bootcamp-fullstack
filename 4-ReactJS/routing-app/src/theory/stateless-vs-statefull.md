# Stateless vs Statefull Components

Tambien son conocidos como componentes Tontos vs Inteligentes

Los componentes Stateless o dummy, son componentes que no tienen lógica dentro y por tanto no manejan un estado. **Su unico cometido es puntar la información que le viene por props**

Estos componentes podrían tener una callback function del padre como prop. Siguen siendo stateless.

Los componentes statefull o smart por su parte tiene tanto estado como lógica de negocio con la que generan la información necesaria para pasársela a sus componentes stateless y asi que estos sean pintados.
