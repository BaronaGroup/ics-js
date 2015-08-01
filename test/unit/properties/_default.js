import assert from "assert";
import Property from "../../../ics-js/Property";
import { _default } from "../../../ics-js/properties";

describe("_default", function() {
  const name = "NAME";
  const value = "value";
  const propClass = _default(name);
  const prop = new propClass(value);

  describe("_default()", function() {
    it("should return an extension of Property with the name as the propName", function() {
      assert.equal(new propClass() instanceof Property, true);
      assert.equal(propClass.propName, name);
    });
  });

  describe("#transformedValue()", function() {
    it("should pass the value without transformations", function() {
      assert.equal(prop.transformedValue(), value);
    });
  });
});
