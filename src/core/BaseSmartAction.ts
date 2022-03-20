export class BaseSmartAction {
  public label!: string; //name
  public type!: any;
  public fields!: any[];
}

/**
 *  name: string;
    type?: string | undefined;
    fields?: Array<{
        field: string;
        type: string | string[];
        reference?: string | undefined;
        enums?: string[] | undefined;
        description?: string | undefined;
        isRequired?: boolean | undefined;
    }> | undefined;


    endpoint?: string | undefined;
 */
