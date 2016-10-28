package com.scau.beyondboy.weexdemo;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import com.scau.beyondboy.weexdemo.service.FloatWindowService;
import com.scau.beyondboy.weexdemo.view.FloatWindow;

public class MainActivity extends AppCompatActivity {
    private boolean isClick=false;
    private FloatWindow mFloatWindow;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mFloatWindow=new FloatWindow(this);
        findViewById(R.id.btn).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                isClick=!isClick;
                if(isClick){
                   // mFloatWindow.show();
//                    startService(new Intent(MainActivity.this, FloatWindowService.class));
                    startActivity(new Intent(MainActivity.this,WXPageActivity.class));
                }
                else{
//                    stopService(new Intent(MainActivity.this, FloatWindow.class));
                   // mFloatWindow.hide();
                }
            }
        });
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if(mFloatWindow!=null){
            mFloatWindow.hide();
        }
    }
}
