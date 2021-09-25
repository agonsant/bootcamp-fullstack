# BBDD

Las bases de datos (BBDD o DDBB) son unos sitemas/aplicaciones/SERVIDORES que nos proporcionan herramientas para poder hacer operaciones con los datos (CRUD) de una manera muy optimizada.

Al final solo hay un modo de persistir la información que es utilizando ficheros, por lo que las BBDD en definitiva acaban persistiendo la información en ficheros, pero al ser servidores pueden optimizar en memoria las operaciones con los datos.

Las BBDD soportan toda la carga no solo de una aplicación sino de todas las aplicaciones de una empresa, por lo que son sistemas muy críticos y por eso existen perfiles especializados solo en BBDD (DBA) y existen muchísimos aplicaciones gestoras de BBDD (oracle DB, MySQL, MariaDB, PostgreSQL, MongoDB, Cassandra, SQL Server, Hadoop, CouchDB, GraphQL ...).

## Tipos BBDD

¿Que es una entidad?

Representa un tipo de datos o un tipo de objeto. Al igual que los objetos, las entidades tienen propiedades que representan características de esa entidad.

Las propiedades, al igual que las propiedades de los objetos, tienen un **nombre de propiedad** y un **valor de esa propiedad a un individuo**

Las entidades tienen individuos o entradas en BBDD o fila de la BBDD que es cada uno de los elementos que representa a esa entidad, con valores de sus propiedades ya definidos.

Las entidades siempre tienen que tener **una propiedad** o un conjunto de propiedades **que identifican únicamente en el universo a un individuo de esa entidad**. a Este concepto se le llama **CLAVE**

Otra característica de las entidades, es que se suelen relacionar entre ellas.

### SQL

Son las BBDD que utilizan el lenguaje SQL (Structured Query Lenguage) para operar con los datos. Se ha relacionado mucho este tipo de BBDD con lo que se conocen como **BBDD Relacionales.**

Son las más antiguas.

Ejemplos oracle DB, MySQL, MariaDB, PostgreSQL, SQL Server.

Una de las características principales de las BBDD relacionales es que sus entidades están representadas en **tablas** (filas+columnas), en el que cada el nombre de cada columna es el nombre de cada una de las propiedades de esa entidad y cada fila es cada individuo que representa a esa entidad y que da valores a las propiedades de esa entidad.

Para relacionar entidades en BBDD SQL se usa lo que se conoce como clave foránea

EJ: entidad alumnos

|--Nombre--|--Apellidos--|--Edad--|--Direccion--|   bootcamp_FK|
| Matias   | Lallave     | 85     | El C Express|  FullStack   |

EJ: entidad bootcamp

|--Nombre--|--contenido--|--precio--|
| FullStack   | mucho     | x€     |
| UX/UI      | mucho      | x€      |

las BBDD relacionales tienen operaciones de Union de entidades (**JOIN** **INNERJOIN** **OUTTERJOIN**)

### NoSQL

Estas BBDD son las que NO utilizan SQL como su lenguaje de operaciones con los datos

¿Y entonces que utilizan?

Pues variedad, ejemplos:

- **MongoDB**: Utiliza su propio lenguaje para las operaciones
- **Cassandra**: Utilizan su propio lenguage llamado CQL

Vamos a utilizar MongoDB

## MongoDB

MongoDB es una BBDD NoSQL basada en documentos, no en tablas como las BBDD relacionales tradicionales.
Tenemos varios conceptos en MongoDB

- **database**: En si mismo la instancia BBDD.
- **collections**: Basicamente son las entidades. (Las listas de elementos).
- **schema**: Definición de una collection.
- **document**: Es en lo que esta basado las gestión de los datos en MondoDB. y corresponde a un individuo en formato JSON de una entidad (Collection).

La relación entre estos conceptos es de la siguiente manera:

ExpressJS se conecta a un **Database**, dentro de ese Database hay **n collections** y dentro de una collection hay **m documentos**.

Para poder tener una BBDD MongoDB tengo dos opciones:

1. Descargármela e Instalármela en mi ordenador o en mi servidor. (On premise - gratuito y el límite lo pone tus recursos)
2. Cloud de mongoDB, es decir, unos servidores en internet que son comprados por la empresa MongoDB. Como esto cuesta un dinerillo MongoDB mos ofrece diferentes planes en función de la necesidad. El que vamos a utilizar en clase es el gratuito, que es un plan que nos da 512MB de datos y nos da un servidor en internet compartido con otra mucha gente.
