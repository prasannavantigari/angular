import { Calculator } from "./calculate";
import { Rectangle } from './rectangle';

describe("testing calculator class",function(){
    it("test add function",function(){

        //Arrange
        let cal=new Calculator();

        //Act
        let actualResult=cal.addNumbers(10,60);

        //Assert
        let expectedResult=80;
    expect(actualResult).toBe(expectedResult);

        
    })
    it("test getArea function",function(){
        let rect=new Rectangle();
        let area=rect.getArea(20,30);
         expect(area).toBe(600);

    
})
it("test getParameter function",function(){
    let rect1=new Rectangle();
    let parameter=rect1.getParameter(20,30);
    expect(parameter).toBe(100);
})
})