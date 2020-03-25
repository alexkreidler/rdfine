import { SingleContextClownface } from 'clownface'
import * as ns from '@tpluscode/rdf-ns-builders'
import { shrink } from '@zazuko/rdf-vocabularies'
import { TypeMap } from '../index'

export function isDatatype(term: SingleContextClownface, typeMappings: TypeMap): boolean {
  if (term.has(ns.rdf.type, ns.rdfs.Datatype).values.length) {
    return true
  }

  const mapped = typeMappings[shrink(term.value)]
  if (mapped) {
    return mapped !== 'NamedNode'
  }

  const result = term.has(ns.rdf.type, [ns.schema.DataType, ns.rdfs.Datatype]).values.length > 0
  if (result) {
    return true
  }

  const superClasses = term.out(ns.rdfs.subClassOf).toArray()
  for (const superClass of superClasses) {
    if (isDatatype(superClass, typeMappings)) {
      return true
    }
  }

  return false
}

export function isEnumerationType(term: SingleContextClownface) {
  if (term.has(ns.rdfs.subClassOf, ns.schema.Enumeration).values.length > 0) {
    return true
  }

  const superClasses = term.out(ns.rdfs.subClassOf).toArray()
  for (const superClass of superClasses) {
    if (isEnumerationType(superClass)) {
      return true
    }
  }

  return false
}