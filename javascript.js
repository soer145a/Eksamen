$(window).on("load", normalImg);


$(".link_knap").click(function () {
	window.location = $(this).find("a").attr("href");
	return false;
});

function hoverUx(x) {
	$("#ux_forside").hide();
	$("#ux_forside_2").show();
}

function normalImg(x) {
	$("#ani_forside").show();
	$("#ani_forside1").hide();
	$("#ux_forside").show();
	$("#ux_forside_2").hide();
}

function hoverAni(x) {
	$("#ani_forside").hide();
	$("#ani_forside1").show();
}
