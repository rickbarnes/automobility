using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace Automobility.Web.Hubs
{
    [HubName("hack")]
    public class HackHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }
    }
}