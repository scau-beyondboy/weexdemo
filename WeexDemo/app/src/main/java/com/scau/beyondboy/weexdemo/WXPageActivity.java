package com.scau.beyondboy.weexdemo;

import android.os.Bundle;
import android.support.annotation.Nullable;
import com.scau.beyondboy.weexdemo.weex.activity.SimpleWeexActivity;
import com.taobao.weex.utils.WXFileUtils;
/**
 * @Author: beyondboy
 * @Gmail: guoli.xgl@alibaba-inc.com
 * @Date: 2016-10-27
 * @Time: 13:35
 */
public class WXPageActivity extends SimpleWeexActivity {
    private static final String DEFAULT_IP = "localhost";
    private static String CURRENT_IP= DEFAULT_IP; // your_current_IP
    private static final String WEEX_INDEX_URL = "http://"+CURRENT_IP+":12580/examples/build/index.js";

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        renderPage(WXFileUtils.loadAsset("h5navigation.js",this),"file://assets/h5navigation.js");
       // renderPage(WXFileUtils.loadAsset("hello.js",this),DEFAULT_IP);
       // renderPageByURL(WEEX_INDEX_URL);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
    }
}
