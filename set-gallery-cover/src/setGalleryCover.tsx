interface IPluginApi {
  React: typeof React;
  GQL: any;
  libraries: {
    ReactRouterDOM: {
      Link: React.FC<any>;
      Route: React.FC<any>;
      NavLink: React.FC<any>;
    };
    Bootstrap: {
      Button: React.FC<any>;
      Nav: React.FC<any> & {
        Link: React.FC<any>;
      };
    };
    FontAwesomeSolid: {
      faEthernet: any;
    };
    Intl: {
      FormattedMessage: React.FC<any>;
    };
  };
  loadableComponents: any;
  components: Record<string, React.FC<any>>;
  utils: {
    NavUtils: any;
    loadComponents: any;
  };
  hooks: any;
  patch: {
    before: (target: string, fn: Function) => void;
    instead: (target: string, fn: Function) => void;
    after: (target: string, fn: Function) => void;
  };
  register: {
    route: (path: string, component: React.FC<any>) => void;
  };
}

(function () {
  const PluginApi = (window as any).PluginApi as IPluginApi;
  const React = PluginApi.React;
  const GQL = PluginApi.GQL;
  const { Button } = PluginApi.libraries.Bootstrap;
  const { faEthernet } = PluginApi.libraries.FontAwesomeSolid;
  const { Link, NavLink } = PluginApi.libraries.ReactRouterDOM;
  const { NavUtils } = PluginApi.utils;
})();
