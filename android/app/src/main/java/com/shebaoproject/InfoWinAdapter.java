package com.shebaoproject;

import android.content.Context;
import android.support.annotation.NonNull;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.amap.api.maps2d.AMap;
import com.amap.api.maps2d.model.LatLng;
import com.amap.api.maps2d.model.Marker;

/**
 * Created by ijoy on 17-5-16.
 */
public class InfoWinAdapter implements AMap.InfoWindowAdapter, View.OnClickListener {
    private Context context;
    private LatLng latLng;
    private String snippet;
    private String agentName;

    public InfoWinAdapter(Context mContext) {
        this.context = mContext;
    }

    @Override
    public View getInfoWindow(Marker marker) {
        initData(marker);
        View view = initView();
        return view;
    }

    @Override
    public View getInfoContents(Marker marker) {
        return null;
    }
    private void initData(Marker marker) {
        latLng = marker.getPosition();
        snippet = marker.getSnippet();
        agentName = marker.getTitle();
    }

    @NonNull
    private View initView() {
        View view =LayoutInflater.from(context).inflate(R.layout.ijoy_infowindow, null);

        return view;
    }
    @Override
    public void onClick(View v) {

    }
}
