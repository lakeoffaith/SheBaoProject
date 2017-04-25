package com.shebaoproject;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by ijoy on 17-4-21.
 */
public class AmapViewManager extends SimpleViewManager<IJoyAmapView> {
    public static final String REACT_CLASS = "IJoyAmapView";
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected IJoyAmapView createViewInstance(ThemedReactContext reactContext) {

        return new IJoyAmapView(reactContext,this);
    }
}
