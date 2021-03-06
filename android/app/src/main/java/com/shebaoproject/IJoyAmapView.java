package com.shebaoproject;

import android.content.Context;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.util.AttributeSet;
import android.util.Log;
import android.view.LayoutInflater;
import android.widget.RelativeLayout;

import com.amap.api.maps2d.AMap;
import com.amap.api.maps2d.MapView;
import com.amap.api.maps2d.model.BitmapDescriptor;
import com.amap.api.maps2d.model.BitmapDescriptorFactory;
import com.amap.api.maps2d.model.LatLng;
import com.amap.api.maps2d.model.Marker;
import com.amap.api.maps2d.model.MarkerOptions;
import com.amap.api.maps2d.overlay.PoiOverlay;
import com.amap.api.services.core.LatLonPoint;
import com.amap.api.services.core.PoiItem;
import com.amap.api.services.core.SuggestionCity;
import com.amap.api.services.poisearch.PoiResult;
import com.amap.api.services.poisearch.PoiSearch;
import java.io.InputStream;
import java.util.List;

/**
 * Created by ijoy on 17-4-25.
 */
public class IJoyAmapView extends RelativeLayout implements  PoiSearch.OnPoiSearchListener ,AMap.OnMapClickListener, AMap.OnMarkerClickListener {
    private AMap aMap=null;
    private MapView mMapView=null;
    private PoiSearch.Query query=null;
    private PoiSearch poiSearch=null;
    private PoiResult poiResult = null;
    private InfoWinAdapter adapter;
    private Marker oldMarker;
    public IJoyAmapView(Context context,AmapViewManager manager) {
        super(context);
        LayoutInflater.from(context).inflate(R.layout.ijoy_amap,this);
        mMapView = (MapView) findViewById(R.id.map);
        mMapView.onCreate(null);
        mMapView.onResume();
        if(mMapView!=null){
            aMap=mMapView.getMap();

            initSearch();
            adapter = new InfoWinAdapter(context);
            aMap.setInfoWindowAdapter(adapter);
            initMarker();
        }
    }
    private void initMarker(){
        LatLng latLng = new LatLng(30.622118, 104.066113);

        MarkerOptions markerOption = new MarkerOptions();
        markerOption.position(latLng);
        markerOption.draggable(true);

        markerOption.icon(BitmapDescriptorFactory.fromResource(R.mipmap.iconmaker));
        Marker marker = aMap.addMarker(markerOption);
        marker.setRotateAngle(0);
    }
    private void initSearch(){
        query=new PoiSearch.Query("药店","","成都");
        query.setPageSize(10);// 设置每页最多返回多少条poiitem
        query.setPageNum(1);//设置查询页码
        poiSearch=new PoiSearch(getContext(),query);
        poiSearch.setOnPoiSearchListener(this);
        PoiSearch.SearchBound searchBound=new PoiSearch.SearchBound(new LatLonPoint(30.622118,104.066113),10000);
        poiSearch.setBound(searchBound);
        poiSearch.searchPOIAsyn();
    }
    @Override
    public void onPoiSearched(PoiResult result, int i) {
        if (result != null && result.getQuery() != null) {
            if (result.getQuery().equals(query)) {
                poiResult = result;
                List<PoiItem> poiItems = poiResult.getPois();
                if (poiItems != null && poiItems.size() > 0) {
                    // 清理之前的图标，将查询结果显示在地图上
                    aMap.clear();
                    PoiOverlay poiOverlay = new PoiOverlay(aMap, poiItems);
                    poiOverlay.removeFromMap();
                    poiOverlay.addToMap();
                    poiOverlay.zoomToSpan();
                }else{
                    // 当搜索不到poiitem数据时，会返回含有搜索关键字的城市信息
                    List<SuggestionCity> suggestionCities = poiResult
                            .getSearchSuggestionCitys();
                }
            }
        }
    }

    @Override
    public void onPoiItemSearched(PoiItem poiItem, int i) {

    }

    @Override
    public void onMapClick(LatLng latLng) {
        Log.e("info", "onMapClick: ");
        if (oldMarker != null) {
            oldMarker.hideInfoWindow();

        }
    }

    @Override
    public boolean onMarkerClick(Marker marker) {
        Log.e("info", "onMarkerClick: ");
        oldMarker = marker;

        return false; //返回 “false”，除定义的操作之外，默认操作也将会被执行
    }
}
