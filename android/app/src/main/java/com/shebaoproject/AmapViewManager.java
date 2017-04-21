package com.shebaoproject;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by ijoy on 17-4-21.
 */
public class AmapViewManager extends SimpleViewManager<Aview> {
    public static final String REACT_CLASS = "Aview";
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected Aview createViewInstance(ThemedReactContext reactContext) {
        return null;
    }
}
