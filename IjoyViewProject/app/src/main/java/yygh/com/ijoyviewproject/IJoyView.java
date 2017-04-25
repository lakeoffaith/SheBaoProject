package yygh.com.ijoyviewproject;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.widget.RelativeLayout;

/**
 * Created by ijoy on 17-4-25.
 */
public class IJoyView extends RelativeLayout {
    public IJoyView(Context context) {
        super(context);
        LayoutInflater.from(context).inflate(R.layout.ijoy_tab,this);

    }

}
