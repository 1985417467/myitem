var pageTool = {
			nowPage: 5, //当前所在页面
			pageStr: '', //页面模块
			rowSize: 12, //每个页面显示的数量
			dataSize: 100, //总数量
			setNowPage: function(page) {
				this.nowPage = page//设置当前页面
			}, 
			getNowPage: function() {
				return this.nowPage //获取当前页面
			},
			getPageStr: function() {
				return this.pageStr//获取页面模块
			}, 
			setDataSize: function(size) {
				this.dataSize = size//设置总数量
			}, 
			setRowSize: function(size) {
				if(size!=this.rowSize){
					this.rowSize==this.rowSize
				}
				else{
					this.rowSize = size//设置每页的数量
					}
				
			}, 
			Pagination: function() {
				let that = this
				that.pageStr = ''
				if (Math.floor((that.dataSize / that.rowSize) == 0)) {
					that.pageStr += '<p class="active-pages">1</p>';
				} else {
					let start = 1;
				 	let max = Math.ceil(that.dataSize / that.rowSize);
				 
					if (that.nowPage - 1 > 1) {
						start = that.nowPage - 1;
					}
					if (that.nowPage > 1) {
						let	pre = that.nowPage - 1;
						that.pageStr += "<li><a href='javascript:void' onclick=\"getTotal(" + 1 + ")\"><span>首页</span></a></li>";
						that.pageStr += "<li><a href='javascript:void' onclick=\"getTotal(" + pre + ")\"><span>上一页</span></a></li>";
					}
					if (that.nowPage > 2) {
						that.pageStr += "<li><a><span class='moveClass'>...</span></a></li>";
					}

					let count = 0;
					for (let i = start; i <= max; i++) {
						let av = '';
						if (i == that.nowPage) av = 'active-pages';
						count++;
						if (count > 3) {
							that.pageStr += "<li><a><span class='moveClass'>...</span></a></li>";
							break;
						}
						that.pageStr += "<li><a class=" + av + " href=\"javascript:void\" onclick=\"getTotal(" + i + ")\"> <span >" + i +
							"</span></a></li>";
					}
					if (that.nowPage<max) {
						let	pre = that.nowPage + 1
						that.pageStr += "<li><a href='javascript:void' onclick=\"getTotal(" + pre + ")\"><span>下一页</span></a></li>";
						that.pageStr += "<li><a href='javascript:void' onclick=\"getTotal(" + max + ")\"><span>尾页</span></a></li>";
					}
				}
				
				return that.pageStr;
			}
		};