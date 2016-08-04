<script type='text/javascript'>//<![CDATA[
$(document).ready(function() {
    $(".paging-wdbloog").show(); 
    $(".paging-wdbloog a:first").addClass("active");

var imageWidth = $(".coolslider-wdbloog").width(); 
var imageSum = $(".wdbloog_img img").size(); 
var imageReelWidth = imageWidth * imageSum;

    $(".wdbloog_img").css({'width' : imageReelWidth});

rotate = function(){ var triggerID = $active.attr("rel") - 1; 

var wdbloog_imgPosition = triggerID * imageWidth;

    $(".paging-wdbloog a").removeClass('active');
        $active.addClass('active');

    $(".cooltitlewdbloog").stop(true,true).slideUp('slow');
    $(".cooltitlewdbloog").eq( 
    $('.paging-wdbloog a.active').attr("rel") - 1 ).slideDown("slow"); 
    $(".wdbloog_img").animate({left: -wdbloog_imgPosition}, 400 );
    };

rotateSwitch = function(){
    $(".cooltitlewdbloog").eq( $('.paging-wdbloog a.active').attr("rel") - 1 ).slideDown("slow");

play = setInterval(function(){
    $active = $('.paging-wdbloog a.active').next();

if ( $active.length === 0) {
    $active = $('.paging-wdbloog a:first'); } rotate(); }, 4000); };

rotateSwitch(); $(".wdbloog_img a, .cooltitlewdbloog a").hover(function() {
    clearInterval(play); }, function() { rotateSwitch();
    });
    $(".paging-wdbloog a").click(function() { $active = $(this);
    clearInterval(play); rotate(); rotateSwitch();  return false;
    });
});
imgr = new Array();imgr[0] = "http://2.bp.blogspot.com/-uitX7ROPtTU/Tyv-G4NA_uI/AAAAAAAAFBY/NcWLPVnYEnU/s1600/no+image.jpg";showRandomImg = true;aBold = true;summaryPost1 = 150;summaryTitle = 20;numposts1 = 5;
function removeHtmlTag(strx,chop){var s = strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);}}s =  s.join("");s = s.substring(0,chop-1);return s;}
function showrecentposts1(json) {j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0; img  = new Array(); for (var i = 0; i < numposts1; i++) {var entry = json.feed.entry[i];var posttitle = entry.title.$t; var pcm; var posturl; if (i == json.feed.entry.length) break; for (var k = 0; k < entry.link.length; k++) {if (entry.link[k].rel == 'alternate') {posturl = entry.link[k].href; break; }}
for (var k = 0; k < entry.link.length; k++) {if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {pcm = entry.link[k].title.split(" ")[0]; break; }} if ("content" in entry) {var postcontent = entry.content.$t;} else if ("summary" in entry) { var postcontent = entry.summary.$t;} else var postcontent = ""; var trtd = '<div class="cooltitlewdbloog"><a href="'+posturl+'">'+posttitle+'</a><p>'+removeHtmlTag(postcontent,summaryPost1)+'... </p></div>'; document.write(trtd); j++;}}
function showrecentposts2(json) { j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0; img  = new Array(); for (var i = 0; i < numposts1 ; i++) { var entry = json.feed.entry[i]; var posttitle = entry.title.$t; var pcm; var posturl; if (i == json.feed.entry.length) break; for (var k = 0; k < entry.link.length; k++) { if (entry.link[k].rel == 'alternate') { posturl = entry.link[k].href;  break; }}for (var k = 0; k < entry.link.length; k++) {if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') { pcm = entry.link[k].title.split(" ")[0]; break; }} if ("content" in entry) {var postcontent = entry.content.$t;}; if(j>imgr.length-1) j=0; img[i] = imgr[j]; s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5); if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d; var trtd = '<a href="'+posturl+'"><img src="'+img[i]+'"/></a>'; document.write(trtd); j++;}}
//]]></script>
