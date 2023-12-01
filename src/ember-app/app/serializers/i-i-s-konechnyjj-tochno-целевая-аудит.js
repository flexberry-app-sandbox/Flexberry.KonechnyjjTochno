import { Serializer as ЦелеваяАудитSerializer } from
  '../mixins/regenerated/serializers/i-i-s-konechnyjj-tochno-целевая-аудит';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЦелеваяАудитSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
