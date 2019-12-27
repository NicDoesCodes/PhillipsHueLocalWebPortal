import normalize from 'normalize-number';

export default class ColourService{

    /*
        Colour profile based on Ultralume 50, Philips TL85 / CIE 1931
        
        F10 = [
            X = 96.174
            Y = 100.000	
            Z = 81.712
        ]   
    */

    convertRGBtoCIE(r,g,b){
        var xyz = this.convertRGBtoXYZ(r,g,b);
        var cie = this.convertXYZtoCIE(xyz[0],xyz[1],xyz[2]);
        return cie;
    }

    convertRGBtoXYZ(sR,sG,sB){
        var new_R = ( sR / 255 );
        var new_G = ( sG / 255 );
        var new_B = ( sB / 255 );

        if(new_R > 0.04045 ){
            new_R = ( ( new_R + 0.055 ) / 1.055 ) ^ 2.4;
        }else{
            new_R = new_R / 12.92;
        }

        if(new_G > 0.04045){
            new_G = ( ( new_G + 0.055 ) / 1.055 ) ^ 2.4;
        }else{
            new_G = new_G / 12.92;
        }

        if(new_B > 0.04045){
            new_B = ( ( new_B + 0.055 ) / 1.055 ) ^ 2.4;
        }else{
            new_B = new_B / 12.92;
        }

        new_R = new_R * 100
        new_G = new_G * 100
        new_B = new_B * 100

        var X = new_R * 0.4124 + new_G * 0.3576 + new_B * 0.1805;
        var Y = new_R * 0.2126 + new_G * 0.7152 + new_B * 0.0722;
        var Z = new_R * 0.0193 + new_G * 0.1192 + new_B * 0.9505;

        // return new Array(X,Y,Z);
        // return new Array(normalize([0,1],X),normalize([0,1],Y),Z);
        var NX = normalize([0,1000],Math.round(X));
        var NY = normalize([0,1000],Math.round(Y));
        var NZ = normalize([0,1000],Math.round(Z));

        return new Array(NX,NY,NZ);
    }

    convertXYZtoCIE(X,Y,Z){
        const reference_x = 96.174;
        const reference_y = 100.000	;
        const reference_z = 81.712;
        
        var var_U = ( 4 * X ) / ( X + ( 15 * Y ) + ( 3 * Z ) );
        var var_V = ( 9 * Y ) / ( X + ( 15 * Y ) + ( 3 * Z ) );
        var var_Y = Y / 100;

        if ( var_Y > 0.008856 ) 
        {
            var_Y = var_Y ^ ( 1/3 );
        }else
        {
            var_Y = ( 7.787 * var_Y ) + ( 16 / 116 );
        }

        var ref_U = ( 4 * reference_x ) / ( reference_x + ( 15 * reference_y ) + ( 3 * reference_z ) );
        var ref_V = ( 9 * reference_y ) / ( reference_x + ( 15 * reference_y ) + ( 3 * reference_z ) );

        var cie_l = ( 116 * var_Y ) - 16;
        var cie_u = 13 * cie_l * ( var_U - ref_U );
        var cie_v = 13 * cie_l * ( var_V - ref_V );

        return new Array(cie_l,cie_u,cie_v);

    }




}