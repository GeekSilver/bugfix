const bugs = [
    {
        exception:"1 UNDEFINED NULL Constraint in App.js line 3:14",
        tags:["js", "javascript", "reactjs"],
        created_at: "20-01-2020 6.04 pm",
        body: "<p>This will be set by dangerously set inner html</p> On CentOS, Fedora and RedHat-derived systems, use this systemctl command to examine HAProxy’s status:CentOS and Fedora Systems sudo systemctl status haproxy.service -l --no-pagerThe -l flag will ensure that systemctl outputs the entire contents of a line, instead of substituting in ellipses (…) for long lines. The --no-pager flag will output the entire log to your screen without invoking a tool like less that only shows a screen of content at a time.Since you are troubleshooting a cannot bind socket error message, you should receive output that is similar to the following:Output● haproxy.service - HAProxy Load BalancerLoaded: loaded (/usr/lib/systemd/system/haproxy.service; disabled; vendor preset: disabled)Active: failed (Result: exit-code) since Wed 2020-08-19 14:57:05 UTC; 3s agoProcess: 138738 ExecStart=/usr/sbin/haproxy -Ws -f $CONFIG -p $PIDFILE (code=exited, status=1/FAILURE)Process: 138736 ExecStartPre=/usr/sbin/haproxy -f $CONFIG -c -q (code=exited, status=0/SUCCESS)Main PID: 138738 (code=exited, status=1/FAILURE)Aug 19 14:57:05 92214d8ff5e2 systemd[1]: Starting HAProxy Load Balancer...Aug 19 14:57:05 92214d8ff5e2 haproxy[138738]: [ALERT] 231/145705 (138738) : Starting frontend main: cannot bind socket [0.0.0.0:80]. . .Aug 19 14:57:05 92214d8ff5e2 systemd[1]: Failed to start HAProxy Load Balancer.This example systemctl output includes some highlighted lines from the systemd journal that describes the error. These lines give you all the information about the error that you need to troubleshoot it further. Specifically, the line cannot bind socket [0.0.0.0:80] describes the socket that HAProxy is trying to use (0.0.0.0:80), so you can skip the following journalctl steps and instead proceed to the Troubleshooting with ss and ps Utilities section at the end of this tutorial. The other highlighted line indicates the status of the HAProxy process, which in the case of a cannot bind socket error will show Failed to start HAProxy Load Balancer."
    },
    {
        exception:"2 UNDEFINED NULL Constraint in App.js line 3:14",
        tags:["js", "javascript", "reactjs"],
        created_at: "20-01-2020 6.04 pm",
    },
    {
        exception:"3 UNDEFINED NULL Constraint in App.js line 3:14",
        tags:["js", "javascript", "reactjs"],
        created_at: "20-01-2020 6.04 pm",
    },
    {
        exception:"4 UNDEFINED NULL Constraint in App.js line 3:14",
        tags:["js", "javascript", "reactjs"],
        created_at: "20-01-2020 6.04 pm",
    },
    {
        exception:"5 UNDEFINED NULL Constraint in App.js line 3:14",
        tags:["js", "javascript", "reactjs"],
        created_at: "20-01-2020 6.04 pm",
    },
    {
        exception:"6 UNDEFINED NULL Constraint in App.js line 3:14",
        tags:["js", "javascript", "reactjs"],
        created_at: "20-01-2020 6.04 pm",
    },
    {
        exception:"7 UNDEFINED NULL Constraint in App.js line 3:14",
        tags:["js", "javascript", "reactjs"],
        created_at: "20-01-2020 6.04 pm",
    }
]

export default bugs