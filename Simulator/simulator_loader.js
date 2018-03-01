$(document).ready(function() {
    loadChangelog();
});

function loadChangelog() {
    var changelog_url = "https://raw.githubusercontent.com/unball/simulator_unity/master/README.md";
    $("#changelog").load(changelog_url, function() {
        var converter = new showdown.Converter();
        var text = $("#changelog").html();
        $("#changelog").html(converter.makeHtml(text));
    });
}

function loadSimulator() {
    var src_url = "https://itch.io/embed-upload/784947?color=333333";
    var width = 960;
    var height = 610;

    $("#simulator-container").html("<iframe></iframe>");
    $("iframe").attr("src", src_url);
    $("iframe").attr("width", width);
    $("iframe").attr("height", height);
    $("iframe").attr("allowfullscreen", "");
    $("iframe").attr("frameborder", "0");
}
