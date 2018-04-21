export interface IGpioManager {
    process(index: number, bool: boolean): Promise<boolean>;
}