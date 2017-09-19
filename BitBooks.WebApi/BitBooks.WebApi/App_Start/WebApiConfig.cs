using System.Web.Http;
using System.Web.Http.Cors;
using BitBooks.WebApi.DataAccess;
using Microsoft.Practices.Unity;

namespace BitBooks.WebApi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            var container = new UnityContainer();
            container.RegisterType<IBookRepository, ArrayBasedBookRepository>(new HierarchicalLifetimeManager());
            config.DependencyResolver = new UnityResolver(container);

            // CORS
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);

            // Web API routes
            config.MapHttpAttributeRoutes();
        }
    }
}
