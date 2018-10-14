// 获取所有五角星li
$("li")
// 添加模仿悬停事件。,
.hover(function () {
	// 第一个参数为鼠标移入事件，设置：
	$(this)
	.text("★")
	// 获取this之前的所有li
	.prevAll()
	.text("★")
	// 回到this
	.end()
	// 获取this之后的所有li
	.nextAll()
	.text("☆")
}, function () {
	// 第二个参数为鼠标移出事件，设置：
	// 获取所有五角星li
	$("li")
	.text("☆")
	// 获取类名为"current"的五角星
	$(".current")
	.text("★")
	.prevAll()
	.text("★")
})

$("li").on({
	// 添加点击事件
	click:function () {
		// 获取this
		$(this)
		// 添加类名current
		.addClass("current")
		// 移除其他li的类名
		.siblings("li")
		.removeClass("current")
	}
})
