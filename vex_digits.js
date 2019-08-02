void drawSymbol(vector v_P; int symbol;int decoration;float scale;vector color){

    //vector color = {2,0.5,0.2};
    //printf("v_P:%f,symbol:%f",v_P,symbol);
    vector v0  = {0,0,0};
    vector v0b = {0.5,0,0};
    vector v1  = {1,0,0};
    vector v2  = {0,0,1};
    vector v2b = {0.5,0,1};
    vector v3  = {1,0,1};
    vector v4  = {0,0,2};
    vector v4b = {0.5,0,2};
    vector v5  = {1,0,2};

	vector u0  = {0,0,-0.3};
	vector u1  = {1,0,-0.3};
	vector b0  = {-0.3,0,-0.3};
	vector b1  = {1.3,0,-0.3};
	vector b2  = {-0.3,0,2.3};
	vector b3  = {1.3,0,2.3};
	vector h2  = {-0.3,0,2.3};
	vector h2b = {0.5,0,2.9};
	vector h3  = {1.3,0,2.3};

	v0  = v0  *scale;
	v0b = v0b *scale;
	v1  = v1  *scale;
	v2  = v2  *scale;
	v2b = v2b *scale;
	v3  = v3  *scale;
	v4  = v4  *scale;
	v4b = v4b *scale;
	v5  = v5  *scale;
	u0  = u0  *scale;
	u1  = u1  *scale;
	b0  = b0  *scale;
	b1  = b1  *scale;
	b2  = b2  *scale;
	b3  = b3  *scale;
	h2  = h2  *scale;
	h2b = h2b *scale;
	h3  = h3  *scale;

	v0  = v0  + v_P;
	v0b = v0b + v_P;
	v1  = v1  + v_P;
	v2  = v2  + v_P;
	v2b = v2b + v_P;
	v3  = v3  + v_P;
	v4  = v4  + v_P;
	v4b = v4b + v_P;
	v5  = v5  + v_P;
	u0  = u0  + v_P;
	u1  = u1  + v_P;
	b0  = b0  + v_P;
	b1  = b1  + v_P;
	b2  = b2  + v_P;
	b3  = b3  + v_P;
	h2  = h2  + v_P;
	h2b = h2b + v_P;
	h3  = h3  + v_P;


    if(symbol==0){
        int poly = addprim(0,"polyline");
        int p0 = addpoint(0,v0);
        int p1 = addpoint(0,v1);
        int p2 = addpoint(0,v2);
        int p3 = addpoint(0,v3);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int vert1 = addvertex(0,poly,p0);
        int vert2 = addvertex(0,poly,p1);
        int vert3 = addvertex(0,poly,p3);
        int vert4 = addvertex(0,poly,p5);
        int vert5 = addvertex(0,poly,p4);
        int vert6 = addvertex(0,poly,p2);
        int vert7 = addvertex(0,poly,p0);

    }
    else if(symbol==1){
        int poly = addprim(0,"polyline");
        int p0 = addpoint(0,v1);
        int p1 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");

        int vert1 = addvertex(0,poly,p0);
        int vert2 = addvertex(0,poly,p1);
    }
    else if(symbol==2){
        int poly = addprim(0,"polyline");
        int p0 = addpoint(0,v0);
        int p1 = addpoint(0,v1);
        int p2 = addpoint(0,v2);
        int p3 = addpoint(0,v3);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int vert0 = addvertex(0,poly,p4);
        int vert1 = addvertex(0,poly,p5);
        int vert2 = addvertex(0,poly,p3);
        int vert3 = addvertex(0,poly,p2);
        int vert4 = addvertex(0,poly,p0);
        int vert5 = addvertex(0,poly,p1);
    }
    else if(symbol==3){
        int poly = addprim(0,"polyline");
        int p0 = addpoint(0,v0);
        int p1 = addpoint(0,v1);
        int p2 = addpoint(0,v2);
        int p3 = addpoint(0,v3);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int vert1 = addvertex(0,poly,p4);
        int vert2 = addvertex(0,poly,p5);
        int vert3 = addvertex(0,poly,p3);
        int vert4 = addvertex(0,poly,p2);
        int vert5 = addvertex(0,poly,p3);
        int vert6 = addvertex(0,poly,p1);
        int vert7 = addvertex(0,poly,p0);
    }
    else if(symbol==4){
        int poly = addprim(0,"polyline");
        int p1 = addpoint(0,v1);
        int p2 = addpoint(0,v2);
        int p3 = addpoint(0,v3);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int vert1 = addvertex(0,poly,p1);
        int vert2 = addvertex(0,poly,p3);
        int vert3 = addvertex(0,poly,p5);
        int vert4 = addvertex(0,poly,p2);
        int vert5 = addvertex(0,poly,p3);
    }
    else if(symbol==5){
        int poly = addprim(0,"polyline");
        int p0 = addpoint(0,v0);
        int p1 = addpoint(0,v1);
        int p2 = addpoint(0,v2);
        int p3 = addpoint(0,v3);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int vert1 = addvertex(0,poly,p5);
        int vert2 = addvertex(0,poly,p4);
        int vert3 = addvertex(0,poly,p2);
        int vert4 = addvertex(0,poly,p3);
        int vert5 = addvertex(0,poly,p1);
        int vert6 = addvertex(0,poly,p0);
    }
    else if(symbol==6){
        int poly = addprim(0,"polyline");
        int p0 = addpoint(0,v0);
        int p1 = addpoint(0,v1);
        int p2 = addpoint(0,v2);
        int p3 = addpoint(0,v3);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int vert1 = addvertex(0,poly,p5);
        int vert2 = addvertex(0,poly,p4);
        int vert3 = addvertex(0,poly,p2);
        int vert4 = addvertex(0,poly,p0);
        int vert5 = addvertex(0,poly,p1);
        int vert6 = addvertex(0,poly,p3);
        int vert7 = addvertex(0,poly,p2);
    }
    else if(symbol==7){
        int poly = addprim(0,"polyline");
        int p0 = addpoint(0,v0);
        int p2b = addpoint(0,v2b);
        int p2 = addpoint(0,v2);
        int p3 = addpoint(0,v3);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p2b, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int vert1 = addvertex(0,poly,p4);
        int vert2 = addvertex(0,poly,p5);
        int vert3 = addvertex(0,poly,p2b);
        int vert4 = addvertex(0,poly,p0);
        int poly2 = addprim(0,"polyline");
        vert3 = addvertex(0,poly2,p2);
        vert4 = addvertex(0,poly2,p3);
    }
    else if(symbol==8){
        int poly = addprim(0,"polyline");
        int p0 = addpoint(0,v0);
        int p1 = addpoint(0,v1);
        int p2 = addpoint(0,v2);
        int p3 = addpoint(0,v3);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int vert1 = addvertex(0,poly,p0);
        int vert2 = addvertex(0,poly,p1);
        int vert3 = addvertex(0,poly,p3);
        int vert4 = addvertex(0,poly,p5);
        int vert5 = addvertex(0,poly,p4);
        int vert6 = addvertex(0,poly,p2);
        int vert7 = addvertex(0,poly,p0);
        int poly2 = addprim(0,"polyline");
        vert3 = addvertex(0,poly2,p2);
        vert4 = addvertex(0,poly2,p3);
    }
    else if(symbol==9){
        int poly = addprim(0,"polyline");
        int p1 = addpoint(0,v1);
        int p2 = addpoint(0,v2);
        int p3 = addpoint(0,v3);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int vert1 = addvertex(0,poly,p1);
        int vert2 = addvertex(0,poly,p3);
        int vert3 = addvertex(0,poly,p5);
        int vert4 = addvertex(0,poly,p4);
        int vert5 = addvertex(0,poly,p2);
        int vert6 = addvertex(0,poly,p3);
    }
    else if(symbol==10){//A
        int poly = addprim(0,"polyline");
        int p0 = addpoint(0,v0);
        int p1 = addpoint(0,v1);
        int p2b = addpoint(0,v2b);
        int p3 = addpoint(0,v3);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2b, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int vert1 = addvertex(0,poly,p0);
        int vert2 = addvertex(0,poly,p2b);
        int vert3 = addvertex(0,poly,p5);
        int vert4 = addvertex(0,poly,p3);
        int vert5 = addvertex(0,poly,p1);
        int poly2 = addprim(0,"polyline");
        vert3 = addvertex(0,poly2,p2b);
        vert4 = addvertex(0,poly2,p3);
    }
    else if(symbol==11){//B
        int poly = addprim(0,"polyline");
        int p0 = addpoint(0,v0);
        int p1 = addpoint(0,v1);
        int p2 = addpoint(0,v2);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int vert1 = addvertex(0,poly,p2);
        int vert2 = addvertex(0,poly,p4);
        int vert3 = addvertex(0,poly,p5);
        int vert4 = addvertex(0,poly,p2);
        int vert5 = addvertex(0,poly,p1);
        int vert6 = addvertex(0,poly,p0);
        int vert7 = addvertex(0,poly,p2);
    }
    else if(symbol==12){//C
        int poly = addprim(0,"polyline");
        int p0 = addpoint(0,v0);
        int p1 = addpoint(0,v1);
        int p2 = addpoint(0,v2);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int vert1 = addvertex(0,poly,p5);
        int vert2 = addvertex(0,poly,p4);
        int vert3 = addvertex(0,poly,p2);
        int vert4 = addvertex(0,poly,p0);
        int vert5 = addvertex(0,poly,p1);
    }
    else if(symbol==13){//D
        int poly = addprim(0,"polyline");
        int p0 = addpoint(0,v0);
        int p2 = addpoint(0,v2);
        int p3 = addpoint(0,v3);
        int p4 = addpoint(0,v4);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");

        int vert1 = addvertex(0,poly,p4);
        int vert2 = addvertex(0,poly,p3);
        int vert3 = addvertex(0,poly,p0);
        int vert4 = addvertex(0,poly,p2);
        int vert5 = addvertex(0,poly,p4);
    }
    else if(symbol==14){//E
        int poly = addprim(0,"polyline");
        int p0 = addpoint(0,v0);
        int p1 = addpoint(0,v1);
        int p2 = addpoint(0,v2);
        int p3 = addpoint(0,v3);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int vert1 = addvertex(0,poly,p5);
        int vert2 = addvertex(0,poly,p4);
        int vert3 = addvertex(0,poly,p2);
        int vert4 = addvertex(0,poly,p3);
        int vert5 = addvertex(0,poly,p2);
        int vert6 = addvertex(0,poly,p0);
        int vert7 = addvertex(0,poly,p1);
    }
    else if(symbol==15){//F
        int poly = addprim(0,"polyline");
        int p0 = addpoint(0,v0);
        int p2 = addpoint(0,v2);
        int p3 = addpoint(0,v3);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int vert1 = addvertex(0,poly,p5);
        int vert2 = addvertex(0,poly,p4);
        int vert3 = addvertex(0,poly,p2);
        int vert4 = addvertex(0,poly,p3);
        int vert5 = addvertex(0,poly,p2);
        int vert6 = addvertex(0,poly,p0);
    }
    else if(symbol==16){//X
        int p0 = addpoint(0,v0);
        int p1 = addpoint(0,v1);
        int p2b = addpoint(0,v2b);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2b, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int poly = addprim(0,"polyline");
        int vert1 = addvertex(0,poly,p0);
        int vert2 = addvertex(0,poly,p2b);
        int vert3 = addvertex(0,poly,p1);
        int poly2 = addprim(0,"polyline");
        int vert4 = addvertex(0,poly2,p4);
        int vert5 = addvertex(0,poly2,p2b);
        int vert6 = addvertex(0,poly2,p5);
    }
    else if(symbol==17){//Y
        int p0b = addpoint(0,v0b);
        int p2b = addpoint(0,v2b);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);
        
        int pass = setpointattrib(0, "Cd", p0b, color, "set");
        	pass = setpointattrib(0, "Cd", p2b, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int poly = addprim(0,"polyline");
        int vert1 = addvertex(0,poly,p0b);
        int vert2 = addvertex(0,poly,p2b);
        int vert3 = addvertex(0,poly,p4);
        int vert4 = addvertex(0,poly,p2b);
        int vert5 = addvertex(0,poly,p5);
    }
    else if(symbol==18){//Z
        int p0 = addpoint(0,v0);
        int p1 = addpoint(0,v1);
        int p2b = addpoint(0,v2b);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2b, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int poly = addprim(0,"polyline");
        int vert1 = addvertex(0,poly,p4);
        int vert2 = addvertex(0,poly,p5);
        int vert3 = addvertex(0,poly,p2b);
        int vert4 = addvertex(0,poly,p0);
        int vert5 = addvertex(0,poly,p1);
    }
    else if(symbol==19){//V
        int p0b = addpoint(0,v0b);
        int p4 = addpoint(0,v4);
        int p5 = addpoint(0,v5);

        int pass = setpointattrib(0, "Cd", p0b, color, "set");
        	pass = setpointattrib(0, "Cd", p4, color, "set");
        	pass = setpointattrib(0, "Cd", p5, color, "set");

        int poly = addprim(0,"polyline");
        int vert1 = addvertex(0,poly,p4);
        int vert2 = addvertex(0,poly,p0b);
        int vert3 = addvertex(0,poly,p5);
    }
    else if(symbol==20){//x
        int p0 = addpoint(0,v0);
        int p0u = addpoint(0,{0.5,0,0.5});
        int p1 = addpoint(0,v1);
        int p2 = addpoint(0,v2);
        int p3 = addpoint(0,v3);
        
        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p0u, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");

        int poly = addprim(0,"polyline");
        int vert1 = addvertex(0,poly,p0);
        int vert2 = addvertex(0,poly,p0u);
        int vert3 = addvertex(0,poly,p1);
        int poly2 = addprim(0,"polyline");
        int vert4 = addvertex(0,poly2,p2);
        int vert5 = addvertex(0,poly2,p0u);
        int vert6 = addvertex(0,poly2,p3);      
    }
    else if(symbol==21){//->
        int p2 = addpoint(0,v2);
        int p3 = addpoint(0,v3);
        int pup = addpoint(0,{0.75,0,1.2});
        int pdown = addpoint(0,{0.75,0,0.8});

        int pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");
        	pass = setpointattrib(0, "Cd", pup, color, "set");
        	pass = setpointattrib(0, "Cd", pdown, color, "set");

        int poly = addprim(0,"polyline");
        int vert1 = addvertex(0,poly,p2);
        int vert2 = addvertex(0,poly,p3);
        int vert3 = addvertex(0,poly,pup);
        int poly2 = addprim(0,"polyline");
        int vert5 = addvertex(0,poly2,p3);
        int vert6 = addvertex(0,poly2,pdown);  
    }

    if(decoration == 1){//underline
        int d = addprim(0,"polyline");
        int p0 = addpoint(0,u0);
        int p1 = addpoint(0,u1);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");

        int vert0 = addvertex(0,d,p0);
        int vert1 = addvertex(0,d,p1);
    }
    if(decoration == 2){//box
        int d = addprim(0,"polyline");
        int p0 = addpoint(0,b0);
        int p1 = addpoint(0,b1);
        int p2 = addpoint(0,b2);
        int p3 = addpoint(0,b3);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");
        	pass = setpointattrib(0, "Cd", p3, color, "set");

        int vert0 = addvertex(0,d,p0);
        int vert1 = addvertex(0,d,p1);
        int vert2 = addvertex(0,d,p3);
        int vert3 = addvertex(0,d,p2);
        int vert4 = addvertex(0,d,p0);
    }
    if(decoration == 3){//hat
        int d = addprim(0,"polyline");
        int p0 = addpoint(0,h2);
        int p1 = addpoint(0,h2b);
        int p2 = addpoint(0,h3);

        int pass = setpointattrib(0, "Cd", p0, color, "set");
        	pass = setpointattrib(0, "Cd", p1, color, "set");
        	pass = setpointattrib(0, "Cd", p2, color, "set");

        int vert0 = addvertex(0,d,p0);
        int vert1 = addvertex(0,d,p1);
        int vert2 = addvertex(0,d,p2);
    }
}
void drawNumber(vector position;string number;float scale;vector color){
        //string n = itoa(number);
        //printf("n:%s",number);
        for(int i = 0;i<len(number);i++){
                int integer = atoi(number[i]);
                vector positionVector = set(i*1.5*scale,0,0);
                drawSymbol(position+positionVector,integer,0,scale,color);
        }
}
float viewScale = 0.05;
//DEBUG STUFF
//drawSymbol({0,0,0},  0,0);
	//drawSymbol({2,0,0},  1,0);
	//drawSymbol({4,0,0},  2,0);
	//drawSymbol({6,0,0},  3,0);
	//drawSymbol({8,0,0},  4,0);
	//drawSymbol({10,0,0}, 5,0);
	//drawSymbol({12,0,0}, 6,0);
	//drawSymbol({14,0,0}, 7,0);
	//drawSymbol({16,0,0}, 8,0);
	//drawSymbol({18,0,0}, 9,0);
	//drawSymbol({20,0,0},10,0);
	//drawSymbol({22,0,0},11,0);
	//drawSymbol({24,0,0},12,0);
	//drawSymbol({26,0,0},13,0);
	//drawSymbol({28,0,0},14,0);
	//drawSymbol({30,0,0},15,0);
	//drawSymbol({32,0,0},16,0);
	//drawSymbol({34,0,0},17,0);
	//drawSymbol({36,0,0},18,0);
	//drawSymbol({38,0,0},19,0);
	//drawSymbol({40,0,0},20,0);
	//drawSymbol({42,0,0},21,0);
//vector newVec = set(0,0,3);
	//vector newVec2 = set(0,0,3.15);
	//int num = 111222333444555666;
	//string snum = "65123465136465136651342332246156";
	//drawNumber(newVec,snum,viewScale);
	//snum = "32121156511561565189898118";
	//drawNumber(newVec2,snum,viewScale);


vector hsv = set(0.1,1,1);//hue is normalized, saturation lerp to grey, brightness lerps to black if less than 1. (better behavior than CSS HSV)
vector rgb = hsvtorgb(hsv); 
//LETS PLACE A NUMBER AT EACH POINT.
vector POSITION = @P;
int Pindex = @ptnum;
string sPindex = itoa(Pindex);
drawNumber(POSITION,sPindex,viewScale,rgb);
