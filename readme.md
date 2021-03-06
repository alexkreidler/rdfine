> ## RDFine /rɪdɪˈfaɪn/
> ### RDF/JS idiomatic, native, enjoyable

This is a monorepo containing JavaScript libraries which make it much easier to work with RDF using idiomatic JS object model yet at the same time keeping a close relation to the [RDF/JS data model specifications](https://rdf.js.org/data-model-spec/)

## Packages

### [@tpluscode/rdfine](packages/core)

Core library to define the JavaScript object model for RDF classes and properties

### Generated model packages for selected vocabularies:

* [@rdfine/csvw](vocabularies/csvw) - [Metadata Vocabulary for Tabular Data](https://www.w3.org/TR/tabular-metadata/)
* [@rdfine/hydra](vocabularies/hydra) - [Hydra Core Vocabulary](https://www.hydra-cg.com/spec/latest/core/)
* [@rdfine/owl](vocabularies/owl) - [OWL Web Ontology Language](https://www.w3.org/OWL/)
* [@rdfine/rdf](vocabularies/rdf) - [The RDF Concepts Vocabulary](https://www.w3.org/TR/rdf11-concepts/)
* [@rdfine/rdfs](vocabularies/rdfs) - [The RDF Schema vocabulary](https://www.w3.org/TR/rdf-schema/)
* [@rdfine/schema](vocabularies/schema) - http://schema.org/
* [@rdfine/shacl](vocabularies/shacl) - [Shapes Constraint Language](https://www.w3.org/TR/shacl/)

### [@rdfine/generator](packages/generator)

Used to generate the above `@rdfine/*` packages.
