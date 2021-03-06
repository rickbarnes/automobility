using Microsoft.Owin;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

[assembly: OwinStartupAttribute(typeof(Automobility.Web.Startup))]
namespace Automobility.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            app.MapSignalR(); // starts up SignalR and exposes the endpoint /signalr, which will be used for clients to connect to the server
        }
    }
}
