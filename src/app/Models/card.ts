import { Attachment } from './attachment';

export class Card {
  cardName: string | undefined;
  attachments: Array<Attachment> | undefined;
  isEnchantmentCreature: boolean | undefined;
  isEquipment: boolean | undefined;
  isAura: boolean | undefined;
  hasEquipment: boolean | undefined;
  hasEnchantment: boolean | undefined;
  hasAura: boolean | undefined;
  hasRole: boolean | undefined;
  powerOrToughnessModified: boolean | undefined;
  includeSelf: boolean | undefined;
  //Card counters
  plusOneZeroCounters: number;
  plusZeroOneCounters: number;
  plusOnePlusOneCounters: number;
  minusOneZeroCounters: number;
  minusZeroOneCounters: number;
  minusOneMinusOneCounters: number;
  //Power and toughness
  baseToughness: number;
  basePower: number;
  modifiedToughness: number;
  modifiedPower: number;
  //Do functions to check for existing cards

  constructor(name?: string, baseToughness?: number, basePower?: number) {
    this.plusOneZeroCounters = 0;
    this.plusZeroOneCounters = 0;
    this.plusOnePlusOneCounters = 0;
    this.minusOneZeroCounters = 0;
    this.minusZeroOneCounters = 0;
    this.minusOneMinusOneCounters = 0;
    this.cardName = name;
    this.basePower = basePower ?? 0;
    this.baseToughness = baseToughness ?? 0;

    this.modifiedPower = this.basePower;
    this.modifiedToughness = this.baseToughness;
  }

  addCounter(type: string): void {
    if (type.toLowerCase() === 'p1z') {
      if (this.minusOneZeroCounters > 0) {
        this.minusOneZeroCounters--;
      } else {
        this.plusOneZeroCounters++;
      }
    } else if (type.toLowerCase() === 'pz1') {
      if (this.minusZeroOneCounters > 0) {
        this.minusZeroOneCounters--;
      } else {
        this.plusZeroOneCounters++;
      }
    } else if (type.toLowerCase() === 'p1-1') {
      if (this.minusOneMinusOneCounters > 0) {
        this.minusOneMinusOneCounters--;
      } else {
        this.plusOnePlusOneCounters++;
      }
    } else if (type.toLowerCase() === 'm1z') {
      if (this.plusOneZeroCounters > 0) {
        this.plusOneZeroCounters--;
      } else {
        this.minusOneZeroCounters++;
      }
    } else if (type.toLowerCase() === 'mz1') {
      if (this.plusZeroOneCounters > 0) {
        this.plusZeroOneCounters--;
      } else {
        this.minusZeroOneCounters++;
      }
    } else if (type.toLowerCase() === 'm1-1') {
      if (this.plusOnePlusOneCounters > 0) {
        this.plusOnePlusOneCounters--;
      } else {
        this.minusOneMinusOneCounters++;
      }
    }
  }

  removeCounter(type: string): void {
    if (type.toLowerCase() === 'p1z') {
      if (this.plusOneZeroCounters > 0) this.plusOneZeroCounters--;
    } else if (type.toLowerCase() === 'pz1') {
      if (this.plusZeroOneCounters > 0) this.plusZeroOneCounters--;
    } else if (type.toLowerCase() === 'p1-1') {
      if (this.plusOnePlusOneCounters > 0) this.plusOnePlusOneCounters--;
    } else if (type.toLowerCase() === 'm1z') {
      if (this.minusOneZeroCounters > 0) this.minusOneZeroCounters--;
    } else if (type.toLowerCase() === 'mz1') {
      if (this.minusZeroOneCounters > 0) this.minusZeroOneCounters--;
    } else if (type.toLowerCase() === 'm1-1') {
      if (this.minusOneMinusOneCounters > 0) this.minusOneMinusOneCounters--;
    }
  }
}
