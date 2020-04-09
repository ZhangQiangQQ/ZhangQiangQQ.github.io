(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{236:function(e,n,a){"use strict";a.r(n);var t=a(0),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h4",{attrs:{id:"gitlab-ci-cd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ci-cd"}},[e._v("#")]),e._v(" Gitlab ci/cd")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("持续集成 开发-测试-集成测试")])]),e._v(" "),a("li",[a("p",[e._v("持续交付")])]),e._v(" "),a("li",[a("p",[e._v("持续部署")])]),e._v(" "),a("li",[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#事先安装好docker，下载地址：https://docs.docker.com/\n#拉取gitlab-runner镜像\ndocker pull gitlab/gitlab-runner\n")])])])]),e._v(" "),a("li",[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#在shell里运行下面的命令，注意一下volume映射\n#-v $HOME/gitlab-runner-volume/config:/etc/gitlab-runner \\这一行的#\\这一行的 $HOME/gitlab-runner-volume/config $HOME可以改成任意本地目录，之后会用到\n# -v /var/run/docker.sock:/var/run/docker.sock \\ 这一行的/var/run/docker.sock在win下可能有问题，需要找一下docker的安装位置\ndocker run -d \\\n  --name gitlab-runner \\\n  --restart always \\\n  -v $HOME/gitlab-runner-volume/config:/etc/gitlab-runner \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  gitlab/gitlab-runner:latest\n\n")])])])]),e._v(" "),a("li",[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#如果需要更新镜像，可以走这一步，否则跳过即可\ndocker pull gitlab/gitlab-runner:latest\ndocker stop gitlab-runner && docker rm gitlab-runner\n\ndocker run -d \\\n  --name gitlab-runner \\\n  --restart always \\\n  -v $HOME/gitlab-runner-volume/config:/etc/gitlab-runner \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  gitlab/gitlab-runner:latest\n\n")])])])]),e._v(" "),a("li",[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 注册gitlab-runner 参考https://docs.gitlab.com/runner/register/\ndocker run --rm -t -i -v $HOME/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register\n")])])])]),e._v(" "),a("li",[a("p",[e._v("这时候打开你的gitlab")]),e._v(" "),a("p",[a("img",{attrs:{src:"/Users/qiang.zhang/Desktop/%E6%88%AA%E5%B1%8F2020-04-08%E4%B8%8B%E5%8D%884.20.04.png",alt:"截屏2020-04-08下午4.20.04"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"/Users/qiang.zhang/Desktop/%E6%88%AA%E5%B1%8F2020-04-08%E4%B8%8B%E5%8D%884.22.27.png",alt:"截屏2020-04-08下午4.22.27"}})]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#上一步之后，会有一堆问题回答\nRuntime platform                                    arch=amd64 os=linux pid=7 revision=4c96e5ad version=12.9.0\nRunning in system-mode.                            \n                                                   \nPlease enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/):\n#上图3的网址\nPlease enter the gitlab-ci token for this runner:\n#上图4的地址\nPlease enter the gitlab-ci description for this runner:\n[3a594927a932]: vue typescript template\nPlease enter the gitlab-ci tags for this runner (comma separated):\n#自己定义的标签，比如test,dev\nRegistering runner... succeeded                     runner=aPsdGq2A\nPlease enter the executor: docker-ssh, parallels, ssh, virtualbox, custom, docker, shell, docker+machine, docker-ssh+machine, kubernetes:\n#写 docker\nPlease enter the default Docker image (e.g. ruby:2.6):\n#写 alpine:latest\nRunner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded!\n")])])]),a("p",[e._v("回到你的gitlab，你就能看到下面的东西")]),e._v(" "),a("p",[a("img",{attrs:{src:"/Users/qiang.zhang/Desktop/%E6%88%AA%E5%B1%8F2020-04-08%E4%B8%8B%E5%8D%884.25.06.png",alt:"截屏2020-04-08下午4.25.06"}})])]),e._v(" "),a("li",[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 运行下面的命令查看是否有问题\ndocker logs gitlab-runner\n")])])]),a("p",[e._v("如果看到下面的错误，就证明docker没有生成config.toml，需要手动从之前定义的$HOME下找到config.toml复制到docker里")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ERROR: Failed to load config stat /etc/gitlab-runner/config.toml: no such file or directory  builds=0\n#或者下面的\nERROR: Failed to load config stat /etc/gitlab-runner/config.toml: no such file or directory  builds=0\nERROR: Failed to load config stat /etc/gitlab-runner/config.toml: no such file or directory  builds=0\nERROR: Failed to load config stat /etc/gitlab-runner/config.toml: no such file or directory  builds=0\nERROR: Failed to load config stat /etc/gitlab-runner/config.toml: no such file or directory  builds=0\nERROR: Failed to load config stat /etc/gitlab-runner/config.toml: no such file or directory  builds=0\n")])])]),a("p",[e._v("解决步骤：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('docker ps -a\n#看到类似下面这样的，复制CONTAINER ID\n#CONTAINER ID        IMAGE                         COMMAND                  CREATED             STATUS                      PORTS                      NAMES\nc324fdf55c20        bfb85bb1e211                  "gitlab-runner-helpe…"   24 minutes ago      Exited (0) 24 minutes ago                              runner\n\n#接着下面的走\ndocker exec -it 刚才复制的containerid /bin/sh\ncd /etc/gitlab-runner\ntouch config.toml\nvi config.toml\n然后就是把本地的config.toml贴进去进行\n')])])])]),e._v(" "),a("li",[a("p",[e._v("再执行")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('#\nConfiguration loaded                                builds=0\nConfiguration loaded                                builds=0\nChecking for jobs... received                       job=872 repo_url=https://gitlab.jingle.cn/websh/ff_event_vue_template.git runner=ejiRy6v7\nWARNING: Failed to parse "X-GitLab-Trace-Update-Interval" header  error=strconv.Atoi: parsing "": invalid syntax header-value= job=872 runner=ejiRy6v7\nWARNING: Failed to parse "X-GitLab-Trace-Update-Interval" header  error=strconv.Atoi: parsing "": invalid syntax header-value= job=872 runner=ejiRy6v7\nWARNING: Failed to parse "X-GitLab-Trace-Update-Interval" header  error=strconv.Atoi: parsing "": invalid syntax header-value= job=872 runner=ejiRy6v7\nWARNING: Failed to parse "X-GitLab-Trace-Update-Interval" header  error=strconv.Atoi: parsing "": invalid syntax header-value= job=872 runner=ejiRy6v7\nWARNING: Failed to parse "X-GitLab-Trace-Update-Interval" header  error=strconv.Atoi: parsing "": invalid syntax header-value= job=872 runner=ejiRy6v7\nWARNING: Failed to parse "X-GitLab-Trace-Update-Interval" header  error=strconv.Atoi: parsing "": invalid syntax header-value= job=872 runner=ejiRy6v7\nJob succeeded                                       duration=27.6497334s job=872 project=42 runner=ejiRy6v7\nWARNING: Failed to parse "X-GitLab-Trace-Update-Interval" header  error=strconv.Atoi: parsing "": invalid syntax header-value= job=872 runner=ejiRy6v7\n')])])])]),e._v(" "),a("li",[a("p",[e._v("然后我们在项目的根目录创建一个.gitlab-ci.yml")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("test_job_1:\n    tags:\n        - dev\n    script:\n        - echo Hello world\n")])])])]),e._v(" "),a("li",[a("p",[e._v("再push上去的时候就能看到成功了")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/Users/qiang.zhang/Desktop/%E6%88%AA%E5%B1%8F2020-04-08%E4%B8%8B%E5%8D%884.47.27.png",alt:"截屏2020-04-08下午4.47.27"}})]),e._v(" "),a("p",[e._v("附：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("image: node:latest\ncache:\n    paths:\n    - node_modules/\nbefore_script:\n    - node -v\n    - npm -v\n    - npm install\nstages:\n  - development\ntest_job_1:\n    tags:\n        - dev\n    stage: development\n    script:\n        - npm run tpl\n        - npm run build\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);