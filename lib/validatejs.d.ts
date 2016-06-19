interface ValidateJS {
  (attributes: any, constraints: any, options?:any): any;
  async(attributes, constraints, options?:any): Promise<any>;
  single(value: any, constraints: any, options?:any): any;
}

declare var validate: ValidateJS;

declare module "validate.js" {
	export default validate;
}
