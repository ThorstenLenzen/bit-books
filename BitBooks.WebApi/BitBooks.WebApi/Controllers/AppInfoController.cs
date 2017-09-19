using System.Configuration;
using System.Web.Http;

namespace BitBooks.WebApi.Controllers
{
    [RoutePrefix("appinfo")]
    public class AppInfoController : ApiController
    {
        [Route("deployment-area")]
        [HttpGet]
        public IHttpActionResult GetDeploymentArea()
        {
            var deploymentArea = ConfigurationManager.AppSettings["DeploymentArea"];
            return Ok(deploymentArea);
        }
    }
}
