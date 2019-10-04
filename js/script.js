$(function () {
    includeLayout();
});
function includeLayout() {
    var includeArea = $('[data-include]');
    var self, url;
    $.each(includeArea, function () {
        self = $(this);
        url = self.data("include");
        self.load(url, function () {
            self.removeAttr("data-include");
        });
    });
}

$(document).ready(function() {
  $('body').addClass('js');
  var $tab = $('.tab');

    $tab.on("click", function(e){
  e.preventDefault();
  var $this = $(this);
  $this.toggleClass('active');
  $this.next('.panel').toggleClass('active');
});
});

function initialize() {

    var X_point = 37.487027; // X 좌표
    var Y_point = 127.021989; // Y 좌표
    var X_point2 = 37.471377; // X 좌표
    var Y_point2 = 127.029342; // Y 좌표
    var zoomLevel = 17; // 첫 로딩시 보일 지도의 확대 레벨
    var markerTitle = "비본데이즈"; // 현재 위치 마커에 마우스를 올렸을때 나타나는 이름
    var markerTitle2 = "KT서초우면연구센터";
    var markerMaxWidth = 300; // 마커를 클릭했을때 나타나는 말풍선의 최대 크기

    var myLatlng = new google.maps.LatLng(X_point, Y_point);
    var mapOptions = {
      zoom: zoomLevel,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var myLatlng2 = new google.maps.LatLng(X_point2, Y_point2);
    var mapOptions2 = {
      zoom: zoomLevel,
      center: myLatlng2,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_view'), mapOptions);
    var map2 = new google.maps.Map(document.getElementById('map_view2'), mapOptions2);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: markerTitle
    });
    var marker2 = new google.maps.Marker({
      position: myLatlng2,
      map: map2,
      title: markerTitle2
    });

    var infowindow = new google.maps.InfoWindow(
      {
        maxWidth: markerMaxWidth
      }
    );

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
    google.maps.event.addListener(marker2, 'click', function () {
      infowindow.open(map2, marker2);
    });
  }

  $(document).ready(function () {
    init_dropdown();
  });
