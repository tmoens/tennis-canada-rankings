/*
 * Parts of out site change from year to year: ratings, text, supported
 * events and so on.  This class allows us to put a version on things.
 */

export class Version {
  public _validFrom: number;
  public _validUntil: number;

  get validFrom(): number {
    return this._validFrom;
  }

  set validFrom(value: number) {
    this._validFrom = value;
  }

  get validUntil(): number {
    return this._validUntil;
  }

  set validUntil(value: number) {
    this._validUntil = value;
  }

  hasVersion(version: number): boolean {
    if (this.validFrom && this.validUntil) {
      return version >= this.validFrom && version <= this.validUntil;
    } else if (this.validFrom) {
      return version >= this.validFrom;
    } else if (this.validUntil) {
      return version <= this.validUntil;
    } else {
      return true;
    }
  }
}

