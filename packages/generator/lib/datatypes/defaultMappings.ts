import { TypeMap } from '../index'

export const defaultMappings: TypeMap = {
  'xsd:boolean': 'boolean',
  'xsd:decimal': 'number',
  'xsd:int': 'number',
  'xsd:integer': 'number',
  'xsd:nonNegativeInteger': 'number',
  'xsd:negativeInteger': 'number',
  'xsd:positiveInteger': 'number',
  'xsd:anyURI': 'string',
  'xsd:date': 'Date',
  'xsd:time': 'Date',
  'xsd:dateTime': 'Date',
  'xsd:string': 'string',
  'schema:Boolean': 'boolean',
  'schema:Number': 'number',
  'schema:Integer': 'number',
  'schema:Date': 'Date',
  'schema:Time': 'Date',
  'schema:DateTime': 'Date',
  'schema:Text': 'string',
}
