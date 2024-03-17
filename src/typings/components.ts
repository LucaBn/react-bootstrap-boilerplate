export type GenericObjectType = {
  [key: string]: string;
};

export interface IGenericComponent extends React.PropsWithChildren {
  attributeList?: GenericObjectType;
  eventList?: Record<string, unknown>;
}
