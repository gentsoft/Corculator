let corculator = function(){
    let num_one = 0,
        num_two = 0,
        num_mem = 0,
        num_enter = 0,
        num_open = '0',

        curculator_output = document.querySelector('.curculator_output'),
        curculator_but_C = document.querySelector('.curculator_but_C'),
        curculator_but_MR = document.querySelector('.curculator_but_MR'),
        curculator_but_M = document.querySelector('.curculator_but_M'),
        curculator_but_sum = document.querySelector('.curculator_but_sum'),
        curculator_but_7 = document.querySelector('.curculator_but_7'),
        curculator_but_8 = document.querySelector('.curculator_but_8'),
        curculator_but_9 = document.querySelector('.curculator_but_9'),
        curculator_but_minus = document.querySelector('.curculator_but_minus'),
        curculator_but_4 = document.querySelector('.curculator_but_4'),
        curculator_but_5 = document.querySelector('.curculator_but_5'),
        curculator_but_6 = document.querySelector('.curculator_but_6'),
        curculator_but_x = document.querySelector('.curculator_but_x'),
        curculator_but_1 = document.querySelector('.curculator_but_1'),
        curculator_but_2 = document.querySelector('.curculator_but_2'),
        curculator_but_3 = document.querySelector('.curculator_but_3'),
        curculator_but_divide = document.querySelector('.curculator_but_divide'),
        curculator_but_dot = document.querySelector('.curculator_but_dot'),
        curculator_but_0 = document.querySelector('.curculator_but_0'),
        curculator_but_smooth = document.querySelector('.curculator_but_smooth'),
        curculator_but_root = document.querySelector('.curculator_but_root');

    
    //1
    curculator_but_1.addEventListener('click', function(){
    if(num_open.length < 13){
        if(num_open[0] == '0' & num_open[1] =='.')
            {
                num_open +='1' ;
            } else if(num_open[0] == '0' & num_open[1] !='.' & num_open.length < 2)
                {
                    num_open = '1';
                } else
                    {
                        num_open +='1';
                    }
        curculator_output.innerHTML = num_open;
        }
    });
    //2
    curculator_but_2.addEventListener('click', function(){
    if(num_open.length < 13){
        if(num_open[0] == '0' & num_open[1] =='.')
            {
                num_open +='2' ;
            } else if(num_open[0] == '0' & num_open[1] !='.' & num_open.length < 2)
                {
                    num_open = '2';
                } else
                    {
                        num_open +='2';
                    }
        curculator_output.innerHTML = num_open;
        }
    });
    //3
    curculator_but_3.addEventListener('click', function(){
    if(num_open.length < 13){
        if(num_open[0] == '0' & num_open[1] =='.')
            {
                num_open +='3' ;
            } else if(num_open[0] == '0' & num_open[1] !='.' & num_open.length < 2)
                {
                    num_open = '3';
                } else
                    {
                        num_open +='3';
                    }
        curculator_output.innerHTML = num_open;
        }
    });
    //4
    curculator_but_4.addEventListener('click', function(){
    if(num_open.length < 13){
        if(num_open[0] == '0' & num_open[1] =='.')
            {
                num_open +='4' ;
            } else if(num_open[0] == '0' & num_open[1] !='.' & num_open.length < 2)
                {
                    num_open = '4';
                } else
                    {
                        num_open +='4';
                    }
        curculator_output.innerHTML = num_open;
        }
    });
    //5
    curculator_but_5.addEventListener('click', function(){
    if(num_open.length < 13){
        if(num_open[0] == '0' & num_open[1] =='.')
            {
                num_open +='5' ;
            } else if(num_open[0] == '0' & num_open[1] !='.' & num_open.length < 2)
                {
                    num_open = '5';
                } else
                    {
                        num_open +='5';
                    }
        curculator_output.innerHTML = num_open;
        }
    });
    //6
    curculator_but_6.addEventListener('click', function(){
    if(num_open.length < 13){
        if(num_open[0] == '0' & num_open[1] =='.')
            {
                num_open +='6' ;
            } else if(num_open[0] == '0' & num_open[1] !='.' & num_open.length < 2)
                {
                    num_open = '6';
                } else
                    {
                        num_open +='6';
                    }
        curculator_output.innerHTML = num_open;
        }
    });
    //7
    curculator_but_7.addEventListener('click', function(){
    if(num_open.length < 13){
        if(num_open[0] == '0' & num_open[1] =='.')
            {
                num_open +='7' ;
            } else if(num_open[0] == '0' & num_open[1] !='.' & num_open.length < 2)
                {
                    num_open = '7';
                } else
                    {
                        num_open +='7';
                    }
        curculator_output.innerHTML = num_open;
        }
    });
    //8
    curculator_but_8.addEventListener('click', function(){
    if(num_open.length < 13){
        if(num_open[0] == '0' & num_open[1] =='.')
            {
                num_open +='8' ;
            } else if(num_open[0] == '0' & num_open[1] !='.' & num_open.length < 2)
                {
                    num_open = '8';
                } else
                    {
                        num_open +='8';
                    }
        curculator_output.innerHTML = num_open;
        }
    });
    //9
    curculator_but_9.addEventListener('click', function(){
    if(num_open.length < 13){
        if(num_open[0] == '0' & num_open[1] =='.')
            {
                num_open +='9' ;
            } else if(num_open[0] == '0' & num_open[1] !='.' & num_open.length < 2)
                {
                    num_open = '9';
                } else
                    {
                        num_open +='9';
                    }
        curculator_output.innerHTML = num_open;
        }
    });
    //0
    curculator_but_0.addEventListener('click', function(){
    if(num_open.length < 13){
        if(num_open[0] == '0' & num_open[1] =='.')
            {
                num_open +='0' ;
            } else if(num_open[0] == '0' & num_open[1] !='.' & num_open.length < 2)
                {
                    num_open = '0';
                } else
                    {
                        num_open +='0';
                    }
        curculator_output.innerHTML = num_open;
        }
    });
    //','

    curculator_but_dot.addEventListener('click', function(){
    if(num_open.length < 13){
        let indOfDot = false;
        for(let i = 0;i < num_open.length - 1; i++){
            if(num_open[i] == '.')indOfDot = true
        }
        
        if(indOfDot == false){
            num_open += '.';
            curculator_output.innerHTML = num_open;
        }
    }   
    });
    //C
    curculator_but_C.addEventListener('click', function(){
        num_open ='0';
        num_one = 0;
        num_two = 0;
        num_enter = 0;
        curculator_output.innerHTML = num_open;
    });
    //MR
    curculator_but_MR.addEventListener('click', function(){
        num_open = String(num_mem);
        curculator_output.innerHTML = num_open;
        num_one = 0;
        num_two = 0;
        if (num_mem == +num_open){
            num_mem = 0;
        }
    });
    //M+
    curculator_but_M.addEventListener('click', function(){
        num_mem += +num_open;
        num_open ='0';
        curculator_output.innerHTML = num_open;
        num_one = 0;
        num_two = 0;
    });
    //+
    curculator_but_sum.addEventListener('click', function(){
        num_one = +num_open;
        num_open ='0';
        curculator_output.innerHTML = num_open;
        num_enter = 1;
    });
    //-
    curculator_but_minus.addEventListener('click', function(){
        num_one = +num_open;
        num_open ='0';
        curculator_output.innerHTML = num_open;
        num_enter = 2;
    });
    //*
    curculator_but_x.addEventListener('click', function(){
        num_one = +num_open;
        num_open ='0';
        curculator_output.innerHTML = num_open;
        num_enter = 3;
    });
    //-/
    curculator_but_divide.addEventListener('click', function(){
        num_one = +num_open;
        num_open ='0';
        curculator_output.innerHTML = num_open;
        num_enter = 4;
    });
    //√
    curculator_but_root.addEventListener('click', function(){
        num_one = +num_open;
        num_open = '';
        num_two = String(Math.sqrt(num_one));
        num_one = '';
        if(num_two.length < 13){
            num_open = num_two;
            curculator_output.innerHTML = num_open;
        }else{
            for(let i = 0;i < 13;i++){
                num_one +=num_two[i]
            }
            num_open += num_one;
            curculator_output.innerHTML = num_open;
        }
        num_one = 0;
        num_two = 0;
    });
    //=
    curculator_but_smooth.addEventListener('click', function(){
        if(num_enter == 1){
            num_two = +num_open;
            num_open = '';
            num_open += String(num_one + num_two);
            num_two = num_open;
            num_open ='';
            num_one = '';
            num_enter = 0;
            if(num_two.length < 13){
                num_open = num_two;
                curculator_output.innerHTML = num_open;
            }else{
                for(let i = 0;i < 13;i++){
                    num_one +=num_two[i]
                }
                num_open += num_one;
                curculator_output.innerHTML = num_open;
            }
            num_one = 0;
            num_two = 0;
            

            }else if(num_enter == 2){
                num_two = +num_open;
                num_open = '';
                num_open += String(num_one - num_two);
                num_two = num_open;
                num_open ='';
                num_one = '';
                num_enter = 0;
                if(num_two.length < 13){
                    num_open = num_two;
                    curculator_output.innerHTML = num_open;
                }else{
                    for(let i = 0;i < 13;i++){
                        num_one +=num_two[i]
                    }
                    num_open += num_one;
                    curculator_output.innerHTML = num_open;
                }
                num_one = 0;
                num_two = 0;

                }else if(num_enter == 3){
                    num_two = +num_open;
                    num_open = '';
                    num_open += String(num_one * num_two);
                    num_two = num_open;
                    num_open ='';
                    num_one = '';
                    num_enter = 0;
                    if(num_two.length < 13){
                        num_open = num_two;
                        curculator_output.innerHTML = num_open;
                    }else{
                        for(let i = 0;i < 13;i++){
                            num_one +=num_two[i]
                        }
                        num_open += num_one;
                        curculator_output.innerHTML = num_open;
                    }
                    num_one = 0;
                    num_two = 0;

                    }else if(num_enter == 4){
                        num_two = +num_open;
                        num_open = '';
                        num_open += String(num_one / num_two);
                        num_two = num_open;
                        num_open ='';
                        num_one = '';
                        num_enter = 0;
                        if(num_two.length < 13){
                            num_open = num_two;
                            curculator_output.innerHTML = num_open;
                        }else{
                            for(let i = 0;i < 13;i++){
                                num_one +=num_two[i]
                            }
                            num_open += num_one;
                            curculator_output.innerHTML = num_open;
                        }
                        num_one = 0;
                        num_two = 0;
                        }
    });
}

corculator();