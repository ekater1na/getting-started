import {ProductService} from "./product.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TestBed} from "@angular/core/testing";

describe('ProductService', () => {
  let httpTestingController: HttpTestingController;
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductService,
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductService);
  })

  describe('getProducts', () => {
    it('should call get with the correct URL', () => {

      // call getHero()
      service.getProducts().subscribe(
        // hero => {expect(hero.id).toBe(4)}
      );

      // test that the URL was correct
      const req = httpTestingController.expectOne('assets/data.json');

      req.flush({
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2021",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.png"
      });
      // expect(req.request.method).toBe('GET');
      httpTestingController.verify();
    })
  })

})
